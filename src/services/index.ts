// src/services/index.ts
import { products, vendors } from "../repository";
import statuscode from "http-status-codes";

export const listProducts = () => ({
  statusCode: statuscode.OK,
  body: { products }
});

export const listVendors = () => ({
  statusCode: statuscode.OK,
  body: { vendors }
});

export const findProductById = (id: number) => {
  const product = products.find((data) => data.id === id);
  if (!product) {
    return {
      statusCode: statuscode.NOT_FOUND,
      body: { message: "Product not found!" },
    };
  }

  return {
    statusCode: statuscode.OK,
    body: { product },
  }; 
};

export const findVendorById = (id: number) => {
  const vendor = vendors.find((data) => data.id === id);
  if (!vendor) {
    return {
      statusCode: statuscode.NOT_FOUND,
      body: { message: "Vendor not found!" },
    };
  }

  return {
    statusCode: statuscode.OK,
    body: { vendor },
  }; 
};
