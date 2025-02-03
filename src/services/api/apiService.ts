const API_URL = 'https://run.mocky.io/v3/bba352ba-32ad-4d61-a6b8-8007f7e281c7';

// https://run.mocky.io/v3/062e2944-831d-4fa7-9f2d-9c3873dfed30

export interface Review {
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  postedAt: string;
}

export interface DataType {
  id: string;
  name: string;
  category: string;
  price: number;
  details: string;
  description: string;
  img: string;
  reviews: Review[];
  popularity: number;
  createdAt: string;
}

export const fetchData = async (): Promise<DataType[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: DataType[] = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch data failed:', error);
    throw error;
  }
};