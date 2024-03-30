import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import styles from "./Header.module.css"
import { useTheme } from "../../../../hooks/useTheme"

export default function Header() {
  const { theme, setTheme } = useTheme()

  const handleLightThemeClick = () => {
    setTheme("light")
  }
  const handleDarkThemeClick = () => {
    setTheme("dark")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.header} position="static">
        <Toolbar>
          <Typography
            className={styles.header__title}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            React Arrow Game
          </Typography>
          <Typography
            className={styles.header__title}
            component="div"
            sx={{ flexGrow: 0 }}
          >
            Theme:
          </Typography>
          <Button
            className={styles.button__darkmode}
            onClick={handleDarkThemeClick}
            color="inherit"
          >
            Dark
          </Button>
          <Button
            className={styles.button__lightmode}
            onClick={handleLightThemeClick}
            color="inherit"
          >
            Light
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
