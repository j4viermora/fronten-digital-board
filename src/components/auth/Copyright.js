import Typography from '@material-ui/core/Typography';
export function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <a color="inherit" href="https://codeningspa.com/" target="_blank" rel="noopener noreferrer" >
          Codening
        </a>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }