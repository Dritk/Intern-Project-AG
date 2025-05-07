export type NotificationType = {
  id: number;
  message: string;
  redirected_id: string;
  type: string;
  status: string | null;
  order_status: string;
  is_read: boolean;  
  createdAt: string;
  updatedAt: string;
};

