import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import List from '@mui/icons-material/List';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const MainListItems = ({handleOnCreateDiagram}:{handleOnCreateDiagram: ()=>void}) => {
  return (
      <>
          <ListItemButton>
              <ListItemIcon>
                  <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                  primary="New diagram"
                  onClick={handleOnCreateDiagram}
              />
          </ListItemButton>
      </>
  )
} 

export const SecondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Saved Diagrams
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
  </>
);
