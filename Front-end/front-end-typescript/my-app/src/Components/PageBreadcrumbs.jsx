import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';

function PageBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <NavLink exact to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        Home
      </NavLink>
      <NavLink to="/products" style={{ textDecoration: 'none', color: 'inherit' }}>
        Products
      </NavLink>
      <Typography color="text.primary">Product Details</Typography>
    </Breadcrumbs>
  );
}

export default PageBreadcrumbs;
