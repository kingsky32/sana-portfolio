import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AxiosPaginatedRequestConfig, PaginatedDto } from '#apis/apis';
import { IUser } from '#apis/users';
import { IFile } from '#apis/files';
import { api } from '#apis/index';

export interface IPortfolio {
  id: string;
  user: IUser;
  thumbnail: IFile;
  image1: IFile;
  image2: IFile;
  image3: IFile;
  image4: IFile;
  image5: IFile;
  image6: IFile;
  image7: IFile;
  image8: IFile;
  image9: IFile;
  image10: IFile;
  category: string;
  title: string;
  description: string;
  size: string;
  program: string;
  etc: string;
  contents: string;
  redirectUrl: string;
  youtubeId: string;
  startAt: Date;
  endAt: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreatePortfolioDto {
  thumbnail: IFile;
  image1: IFile;
  image2: IFile;
  image3: IFile;
  image4: IFile;
  image5: IFile;
  image6: IFile;
  image7: IFile;
  image8: IFile;
  image9: IFile;
  image10: IFile;
  category: string;
  title: string;
  description: string;
  size: string;
  program: string;
  etc: string;
  contents: string;
  redirectUrl: string;
  youtubeId: string;
  startAt: Date;
  endAt: Date;
  isActive: boolean;
}

export interface UpdatePortfolioDto {
  thumbnail: IFile;
  image1: IFile;
  image2: IFile;
  image3: IFile;
  image4: IFile;
  image5: IFile;
  image6: IFile;
  image7: IFile;
  image8: IFile;
  image9: IFile;
  image10: IFile;
  category: string;
  title: string;
  description: string;
  size: string;
  program: string;
  etc: string;
  contents: string;
  redirectUrl: string;
  youtubeId: string;
  startAt: Date;
  endAt: Date;
  isActive: boolean;
}

export function createPortfolio(createPortfolioDto: CreatePortfolioDto): Promise<AxiosResponse<IPortfolio>> {
  const endpoint = '/portfolios';
  return api.post(endpoint, createPortfolioDto);
}

export function getPortfolio(id: string, config?: AxiosRequestConfig): Promise<AxiosResponse<IPortfolio>> {
  const endpoint = `/portfolios/${id}`;
  return api.get(endpoint, config);
}

export function getPortfolios(config: AxiosPaginatedRequestConfig): Promise<AxiosResponse<PaginatedDto<IPortfolio>>> {
  const endpoint = '/portfolios';
  return api.get(endpoint, config);
}

export function updatePortfolio(
  id: string,
  updatePortfolioDto: UpdatePortfolioDto,
): Promise<AxiosResponse<IPortfolio>> {
  const endpoint = `/portfolios/${id}`;
  return api.put(endpoint, updatePortfolioDto);
}
