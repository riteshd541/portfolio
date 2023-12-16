import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Project.css";
import plist from "../Assests/PPAGE.png";
import ui from "../Assests/ui.png";

export default function MediaCard() {
  const openLiveDemo = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="new-container">
      <h2>Recent Projects</h2>
      <div className="card-container">
        <Card className="custom-card" sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={ui} title="User management" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Admin UI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This Admin UI is a responsive dashboard built using React and
              Material-UI. The interface provides an intuitive design and easy
              navigation, allowing users to manage and control their application
              efficiently.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() =>
                openLiveDemo("https://admin-ui-by-ritesh.netlify.app/")
              }
            >
              LIVE DEMO
            </Button>
            <Button
              size="small"
              onClick={() =>
                openLiveDemo("https://github.com/riteshd541/admin_ui")
              }
            >
              GIT REPO
            </Button>
          </CardActions>
        </Card>
        <Card className="custom-card" sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={plist}
            title="Product List Page"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              PRODUCT LIST
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Product list is a react app in which list of product are fetched
              from API and then shown. It has search functionality and having
              some filter catergories. You can also apply filter as shown in the
              UI.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() =>
                openLiveDemo("https://products-list-pages.netlify.app/")
              }
            >
              LIVE DEMO
            </Button>
            <Button
              size="small"
              onClick={() =>
                openLiveDemo("https://github.com/riteshd541/Product-list")
              }
            >
              GIT REPO
            </Button>{" "}
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
