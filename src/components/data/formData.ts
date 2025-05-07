export interface PersonalInfoData {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface ProfileDetailData {
    dob: string | null; // Date of birth
    gender: string;
    username: string;
    genre: string;
  }

  export interface ContactInfoData {
    telNumber: string;
    altNumber?: string | null;
    country: string;
    currency: string;
    address: string;
    address2?: string;
  }
  
  export interface BiographyData {
    biography: string;
    termsAccepted: boolean;
  }
  
