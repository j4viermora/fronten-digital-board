import CardGruop from "../../components/ui/CardGroup"
import { Box, Grid, Typography } from "@material-ui/core"
export const Grupos = () => {
    return (
        <Box>
            <Grid container justify="center" style={{marginBottom: "3vh" }}>
                <Typography variant="h3" >Grupos</Typography>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={2}>
                                {
                [ 1,2,3,4,5,6,7,9,10].map( card => (
                                    <Grid item> 
                                        <CardGruop { ...card } />
                                    </Grid>
                            ))}
                    </Grid>
                </Grid> 
            </Grid>
        </Box>
    )
}
