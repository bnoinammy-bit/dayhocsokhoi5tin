import { Student, Question, Exam, Homework } from '../types';

export const INITIAL_STUDENTS: Student[] = [
  {
    id: 'st-5c-1',
    code: '5C01',
    fullName: 'Hoàng Bảo An',
    name: 'Hoàng Bảo An',
    className: 'Lớp 5C',
    gender: 'Nam',
    dob: '12/03/2015',
    pin: '123456',
    status: 'active'
  },
  {
    id: 'st-5c-2',
    code: '5C02',
    fullName: 'Trần Mai Anh',
    name: 'Trần Mai Anh',
    className: 'Lớp 5C',
    gender: 'Nữ',
    dob: '05/08/2015',
    pin: '123456',
    status: 'active'
  },
  {
    id: 'st-5d-1',
    code: '5D01',
    fullName: 'Nguyễn Minh Quân',
    name: 'Nguyễn Minh Quân',
    className: 'Lớp 5D',
    gender: 'Nam',
    dob: '20/11/2015',
    pin: '123456',
    status: 'active'
  }
];

export const INITIAL_QUESTIONS: Question[] = [];

export const INITIAL_EXAMS: Exam[] = [];

export const INITIAL_HOMEWORK: Homework[] = [];
