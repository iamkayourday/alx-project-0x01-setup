export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}


export interface PostData {
  userId: number;
  id?: number; // Optional ID since it will be generated when a new post is added
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void; // Function to close the modal
  onSubmit: (post: PostData) => void; // Function to handle form submission
}
