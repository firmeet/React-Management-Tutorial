import logo from './logo.svg';
import './App.css';
import Customer from './Components/Customer'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import {withStyles} from '@material-ui/core/styles'
import React, { Component } from 'react';

const styles = theme => ({
  root: {
  width:"100%",
  marginTop: theme.spacing.unit * 3,
  overflowX : "auto"
  }, 
  table: {
    minWidth: 1080
  }
})


class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body =  await response.json();
    return body;
  }
render(){
  const { classes } = this.props;
  return (    
    <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          this.state.customers ? this.state.customers.map(c=> {
            return (
              <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
              />
              )
            } 
          ): "" 
        }
        </TableBody>
      </Table>
    </Paper>
  );
      }
}

// class App extends Component {
//   render () {
//     return (
//     <Customer 
//       name={customer.name}
//       birthday={customer.birthday}
//       gender={customer.gender}
//       job={customer.job}
//     />
//     );
//   }
//}

export default withStyles(styles)(App);
