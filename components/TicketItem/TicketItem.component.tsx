import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PaymentsIcon from "@mui/icons-material/Payments";
export default function TicketItem() {
	return (
		<div className='flex flex-1 my-4 space-x-6'>
			<Card sx={{ maxWidth: 200, backgroundColor: "#FF6500" }}>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						25 TAKA
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Chompa
					</Typography>
					<PaymentsIcon />
				</CardContent>
			</Card>
			<Card sx={{ maxWidth: 200, backgroundColor: "#E8A70C" }}>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						30 TAKA
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Gazania
					</Typography>
					<PaymentsIcon />
				</CardContent>
			</Card>
			<Card sx={{ maxWidth: 200, backgroundColor: "#E8D00C" }}>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						20 TAKA
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Rojonigondha
					</Typography>
					<PaymentsIcon />
				</CardContent>
			</Card>
			<Card sx={{ maxWidth: 200, backgroundColor: "#0DFFF9" }}>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						30 TAKA
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						Podma
					</Typography>
					<PaymentsIcon />
				</CardContent>
			</Card>
		</div>
	);
}
