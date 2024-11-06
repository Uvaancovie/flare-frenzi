// types/splide.d.ts
declare module '@splidejs/react-splide' {
    import { ComponentType } from 'react';
  
    export interface SplideProps {
      options?: Record<string, unknown>; // Use unknown instead of any
      children: React.ReactNode;
    }
  
    export const Splide: ComponentType<SplideProps>;
    export const SplideSlide: ComponentType<{ children: React.ReactNode }>;
  }
  