import React from "react";
import { render } from "react-dom";
import { createUseStyles, ThemeProvider, useTheme } from "react-jss";

const useStyles = createUseStyles({

  name: {
    position: "absolute",
    display: "flex",
    flex : {
      direction : "row",
      align: "center",
      justify: "center"
    },
    font:{
      family: "fontstyle",
      weight: 400,
      style: "normal",
      size: "12px",
      line:{
        height: "16px",
      }
    },
    margin: {
      top: "18px:",
      right:  "523px",
      bottom: "170px",
      left:  "44px",
  },
},

// logo:  {
  // image : {
  //   height: "20px",
  //   width: "20px",
  //   background: url("./src/images.png"),
  // position: "relative",
  
  // margin: "16px 576px 168px 16px",
  // border:{
  //   radius: "3px"
  // },
  // },
  
// },

parent: {
  height: "202px",
  width: "618px",
  margin:{
    top: "250px",
  },
  border: "5px solid ",
  background: "color",
  border:{
      width :"2px",
      style:" solid",
      color : ({ theme }) => theme.color3,
      top :{
      color : ({ theme }) => theme.color2,
      },
  
  },
  position: "relative"
},

btn: {
  width: "96px",
  height: "32px",
  margin : "2px",
  background: ({ theme }) => theme.color3,
  display: "flex",
  flex: {
    direction: "row",
  align: "center",
  justifyContent: "center",
  },
  border:{
    radius: 4,
  },
  border: "1px solid ({ theme }) => theme.color2",
  box:{
    shadow: "0 0 2px ({ theme }) => theme.color2",
  },
  flex: "none",
  order: 1,
  grow: 0,
  cursor: "pointer",
},

  wrapper: {
    padding: 40,
    background: ({ theme }) => theme.background,
    textAlign: "left"
  },
  title: {
    font: {
      size: 40,
      weight: 900
    },
    color: ({ theme }) => theme.color
  },
  link: {
    color: ({ theme }) => theme.color,
    "&:hover": {
      opacity: 0.5
    }
  }
});

const Comp = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    // <div className={classes.wrapper}>
    //   <h1 className={classes.title}>Hello React-JSS!</h1>
    //   <a
    //     className={classes.link}
    //     href="http://cssinjs.org/react-jss"
    //     traget="_blank"
    //   >
    //     See docs
    //   </a>
    // </div>
    <div className={classes.grandparent}>
        <div className={classes.parent}>
            <div className={classes.child1}>
                <div className={classes.logo}>
                    <div className={classes.image}></div>
                </div>
                <div className={classes.name}>
                    Contoso
                </div>
                <div className={classes.dots}>
                    ...
                </div>
            </div>
            <div className={classes.child2}>
                <div className={classes.p1}>Thumbnail card</div>
                <div className={classes.p2}>With an optional subtitle</div>
            </div>
            <div className={classes.child3}>
                <div className={classes.p3}>
                    This is the body of the card, used to tell the user more
                    about the image above. This is an html block and can be edited.
                </div>
            </div>
            <div className={classes.child4}>
                <button className={classes.btn} id="btn1">Button</button>
                <button className={classes.btn} id="btn2">Button</button>
                <button className={classes.btn} id="btn3">Button</button>
                <button className={classes.btn} id="btn4">Button</button>
            </div>
        </div>
    </div>
  );
};

const theme = {
  background: "#f7df1e",
  color: "#24292e",
  color2 : "red",
  color3: "rgb(209,209,209)",
  fontstyle: 'Segoe UI',
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Comp />
  </ThemeProvider>
);

render(<App />, document.getElementById("root"));
