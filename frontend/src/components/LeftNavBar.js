import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  FitnessCenter,
  People,
  EventNote,
  Group,
  AccountCircle,
  Settings,
  LocalLibrary,
  SupervisorAccount,
  Timeline,
  Receipt,
  Inventory,
  Chat,
  ExitToApp as ExitToAppIcon, // Import ExitToAppIcon
} from '@mui/icons-material';

const LeftNavBar = ({ leftNavBarOpen, onLogout }) => {
  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <Drawer
      variant="permanent"
      open={leftNavBarOpen}
      sx={{
        width: '240px',
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '240px',
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        {/* Trainers Management */}
        <ListItem button>
          <ListItemIcon>
            <FitnessCenter />
          </ListItemIcon>
          <ListItemText primary="Trainers" />
        </ListItem>

        {/* Member Management */}
        <ListItem button>
          <ListItemIcon>
            <People />
          </ListItemIcon>
          <ListItemText primary="Members" />
        </ListItem>

        {/* Attendance Management */}
        <ListItem button>
          <ListItemIcon>
            <EventNote />
          </ListItemIcon>
          <ListItemText primary="Attendance" />
        </ListItem>

        {/* Membership Duration */}
        <ListItem button>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Membership Duration" />
        </ListItem>

        {/* Membership Type Management */}
        <ListItem button>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Membership Types" />
        </ListItem>

        {/* User Profile */}
        <ListItem button>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        {/* Knowledge Base (Library) */}
        <ListItem button>
          <ListItemIcon>
            <LocalLibrary />
          </ListItemIcon>
          <ListItemText primary="Library" />
        </ListItem>

        {/* Team Management */}
        <ListItem button>
          <ListItemIcon>
            <SupervisorAccount />
          </ListItemIcon>
          <ListItemText primary="Team" />
        </ListItem>

        {/* Analytics and Reporting */}
        <ListItem button>
          <ListItemIcon>
            <Timeline />
          </ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>

        {/* Billing and Invoicing */}
        <ListItem button>
          <ListItemIcon>
            <Receipt />
          </ListItemIcon>
          <ListItemText primary="Billing" />
        </ListItem>

        {/* Inventory Management */}
        <ListItem button>
          <ListItemIcon>
            <Inventory />
          </ListItemIcon>
          <ListItemText primary="Inventory" />
        </ListItem>

        {/* Communication and Engagement */}
        <ListItem button>
          <ListItemIcon>
            <Chat />
          </ListItemIcon>
          <ListItemText primary="Communication" />
        </ListItem>

        {/* Settings */}
        <ListItem button>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default LeftNavBar;
