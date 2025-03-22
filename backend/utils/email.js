const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const { convert } = require('html-to-text');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `Amit Singh <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      // Use production transport (e.g., Mailgun)
      return nodemailer.createTransport({
        service: 'Mailgun',
        auth: {
          user: process.env.MAILGUN_USERNAME,
          pass: process.env.MAILGUN_PASSWORD
        }
      });
    }

    // Development Transport (e.g., Mailtrap)
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
      }
    });
  }

  // Render HTML from a file and replace variables
  renderHtml(template) {
    const templatePath = path.join(
      __dirname,
      '..',
      'emails',
      `${template}.html`
    );
    let html = fs.readFileSync(templatePath, 'utf-8');

    // Replace placeholders with actual values
    html = html.replace(/{{firstName}}/g, this.firstName);
    html = html.replace(/{{url}}/g, this.url);

    return html;
  }

  // Send actual email
  async send(template, subject) {
    try {
      // 1) Generate HTML from template
      const html = this.renderHtml(template);

      // 2) Convert HTML to plain text
      const text = convert(html);

      // 3) Define email options
      const mailOptions = {
        from: this.from,
        to: this.to,
        subject,
        html,
        text
      };

      // 4) Send the email
      await this.newTransport().sendMail(mailOptions);
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }

  // Send welcome email
  async sendWelcome() {
    await this.send('welcome', 'Welcome to Natours family!');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for 10 minutes)'
    );
  }
};
