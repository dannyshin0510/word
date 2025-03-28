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

import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import { createSvgIcon } from "@mui/material";

const RedCrossCircleIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
  >
    <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2" fill="white" />
    <path
      d="M9 9l6 6M15 9l-6 6"
      stroke="red"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>,
  "RedCrossCircle"
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const FailModal: React.FC<{
  handleClose: () => void;
  open: boolean;
  word: string;
  description?: string;
  url?: string;
}> = ({ handleClose, open, word, description, url }) => {
  return (
    <Dialog TransitionComponent={Transition} open={open} onClose={handleClose}>
      <DialogTitle align="center">
        <RedCrossCircleIcon sx={{ fontSize: 70 }} />
        <Typography variant="h4">You Failed!</Typography>
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
