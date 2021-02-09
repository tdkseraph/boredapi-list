import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastOptions } from 'react-toastify/dist/types';
import './index.css';

const defaultConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
};

export class Toast {
  static success(text: any) {
    toast.success(text, { ...defaultConfig });
  }

  static error(text: any) {
    toast.error(text, { ...defaultConfig });
  }

  static warn(text: React.ReactNode) {
    toast.warn(text, { ...defaultConfig });
  }

  static dark(text: React.ReactNode) {
    toast.dark(text, { ...defaultConfig });
  }

  static info(text: React.ReactNode) {
    toast.info(text, { ...defaultConfig });
  }
}
