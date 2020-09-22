import { ReactNode } from 'react';

export default interface IPageTemplateProps {
    children: ReactNode;
    id: string;
    title: string;
    //loading: boolean;
}