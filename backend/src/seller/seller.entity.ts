import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('sellers')  // 'sellers' টেবিল তৈরি হবে
export class SellerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;  // ইউজারের পাসওয়ার্ড

  @Column({ default: true })
  isActive: boolean;  // সেলার অ্যাক্টিভ কিনা
}
