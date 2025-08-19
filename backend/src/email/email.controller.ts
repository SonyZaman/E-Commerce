import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { SendEmailDto } from './dto/email.dto';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendMail(@Body() sendEmail: SendEmailDto) {
    await this.emailService.sendEmail(sendEmail);
    return { message: 'Email sent successfully' };
  }
}
