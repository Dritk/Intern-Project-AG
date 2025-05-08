export type SupplierLikeResponse = {
    staus: boolean; 
    message: string;
    days: string[];
    result: SupplierLikeDetail[];
  };
  
  export type SupplierLikeDetail = {
    supplier: {
      id: number;
      user_id: number;
      first_name: string;
      middle_name: string;
      last_name: string;
      profile_image: string | null;
      totalLikes: number;
    };
    user: {
      userId: number;
      username: string;
      userImage: string;
      fullName: string;
    }[];
    likedDate: string;
  };
  