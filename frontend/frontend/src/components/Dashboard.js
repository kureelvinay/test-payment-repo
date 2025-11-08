import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  Button,
  AppBar,
  Toolbar,
  IconButton
} from '@mui/material';
import { Logout as LogoutIcon } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Banking System
          </Typography>
          <Typography variant="body2" sx={{ mr: 2 }}>
            Welcome, {user?.name || user?.email || 'User'}!
          </Typography>
          <IconButton color="inherit" onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          🏦 Banking System
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to your Banking System! Manage accounts, transfer funds, and track transactions.
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  💳 Account Management
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View balances, manage accounts, and track transactions
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }} fullWidth>
                  View Accounts
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  💸 Transfer Funds
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Transfer money between accounts and to external accounts
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }} fullWidth>
                  Transfer Money
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  📋 Transaction History
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View transaction history, statements, and reports
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }} fullWidth>
                  View History
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;