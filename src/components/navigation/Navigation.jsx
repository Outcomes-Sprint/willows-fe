
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import './Navigation.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		textAlign: 'left',
		fontFamily: "Poppins",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "24.0263px",
	},
	navbar: {
		background: "#52B788",
	},
	links: {
		textDecoration: "none",
		color: "#484848",
		width: "10rem",
		textAlign: "right",
		fontFamily: "Poppins",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "24.0263px",
	},
	links2: {
		textDecoration: "none",
		color: "#484848",
		width: "10rem",
		textAlign: "right",
		marginTop: "4rem",
		fontFamily: "Poppins",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: "24.0263px",
	},
}));

export default function MenuAppBar({ loggedIn, handleLogout, setLoggedIn }) {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);


	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null)
		localStorage.clear();
		setLoggedIn(false);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar className={classes.navbar}>
					<Typography variant="h6" className={classes.title}>
						<Link className={classes.links} to='/home'>Willow</Link>
					</Typography>
					<div>
						<IconButton aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
							<MenuIcon />
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={open}
								onClose={handleClose}
							>
								<MenuItem onClick={{ handleClose }} ><Link className={classes.links} to='/willows'>Willow</Link></MenuItem>
								<MenuItem onClick={{ handleClose }}><Link className={classes.links} to='/home'>Profile</Link></MenuItem>
								<MenuItem onClick={{ handleClose }}><Link className={classes.links} to='/map'>Listings</Link></MenuItem>
								<MenuItem onClick={{ handleClose }}><Link className={classes.links} to='/home'>About</Link></MenuItem>
								<MenuItem onClick={{ handleClose }}><Link className={classes.links} to='/home'>Support</Link></MenuItem>
								<MenuItem onClick={{ handleClose }}><Link className={classes.links} to='/home'>FAQS</Link></MenuItem>

								<MenuItem onClick={{ handleClose }}>{!loggedIn && <Link to='/signin'>Login</Link>}
								{loggedIn && <button onClick={handleClose}>Logout</button>}</MenuItem>

								<MenuItem onClick={{ handleClose }}><Link className={classes.links2} to='/signin'>Sign In</Link></MenuItem>
							</Menu>
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
