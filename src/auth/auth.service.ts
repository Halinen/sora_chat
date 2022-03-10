import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/db/schemas/user.schema';
import { Model } from 'mongoose';
import { Captcha, RegisterUserDto } from './dto/register-user.dto';
import * as svgCaptcha from 'svg-captcha';
@Injectable()
export class AuthService {
  private captchas: Map<string, Captcha> = new Map();
  constructor(
    @InjectModel('userModel') private readonly userModel: Model<User>,
  ) {}
  /**
   * @description 返回验证码,while循环：生成直到captchas中没有的验证码
   * @date 10/03/2022
   * @return {*}  {Captcha}
   * @memberof AuthService
   */
  public genCaptcha(): Captcha {
    let getdiffCaptcha = false;
    let c: svgCaptcha.CaptchaObj;
    let captcha: Captcha;
    while (!getdiffCaptcha) {
      c = svgCaptcha.create();
      if (!this.captchas.has(c.text)) {
        captcha = Object.assign(c, { time: new Date() });
        getdiffCaptcha = true;
        this.captchas.set(c.text, captcha);
      }
    }

    return captcha;
  }
  public registerUser(registerUserDto: RegisterUserDto) {
    /** */
    //new this.userModel('registerUserDto').save();
  }
}
