import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Link,
} from "@mui/material";

import { styled } from "styled-components";

import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import { createSvgIcon } from "@mui/material";

const GreenCheckCircleIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="green"
      strokeWidth="2"
      fill="white"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="green"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  "GreenCheckCircle"
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledDialog = styled(Dialog)`
  .MuiDialogPaper {
    background-color: #4caf50; /* A rich green background for success */
    color: white; /* White text for contrast */
    border-radius: 16px; /* Rounded corners for a smooth look */
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.3); /* Soft shadow for depth */
    padding: 24px; /* More space around the content */
    max-width: 600px; /* Set a maximum width */
  }

  .MuiDialogTitle-root {
    background-color: #388e3c;
    text-align: center;
    padding: 16px;
  }

  .MuiDialogContent-root {
    padding: 24px;
    background-color: #388e3c;
  }

  .MuiDialogActions-root {
    background-color: #388e3c;
    padding: 16px;
  }
`;

export const SuccessModal: React.FC<{
  handleClose: () => void;
  open: boolean;
  word: string;
  description?: string;
  url?: string;
}> = ({ handleClose, open, word, description, url }) => {
  return (
    <Dialog TransitionComponent={Transition} open={open} onClose={handleClose}>
      <DialogTitle align="center">
        <GreenCheckCircleIcon sx={{ fontSize: 70 }} />
        <Typography variant="h5">Congratulations</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          Today's word: <strong>{word}</strong>
        </Typography>
        <Typography variant="body2">
          {description ||
            "Trump passed a new bill today allowing a 25% increase in federal tax. "}
        </Typography>
        <Link
          href={url || "#"}
          target="_blank"
          variant="body2"
          rel="noopener"
          sx={{ textDecoration: "none", color: "primary" }}
        >
          {`Read more`}
        </Link>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <Button
          variant="contained"
          onClick={handleClose}
          sx={{ backgroundColor: "#303030" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
