import React,{Component} from 'react';
import { Picker } from 'react-native';
import {Card, CardSecion, Input, Button, CardSection} from './common';
import { connect } from 'react-redux';
import { employeeUpdate } from "../actions";

class EmployeeCreate extends Component {
    onButtonPress(){
        const{name,phone,shift} = this.props;

        this.props.employeeCreate({ name, phone, shift:shift || 'Monday' })
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                    label="Name"
                    placeholder="Jane"
                    value={this.props.name}
                    onChangeText={value => this.props.employeeUpdate({prop:"name", value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                    label="Phone"
                    placeholder="555-555-555"
                    value={this.props.phone}
                    onChangeText={value => this.props.employeeUpdate({prop:"phone", value})}
                    />
                </CardSection>

                <CardSection style={{ flexDirection:'column'}}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{flex:1}}
                        selectedValue={this.props.shift}
                        onValueChange={value=>this.props.employeeUpdate({prop:"shift",value})}
                    >
                        <Picker.Item label="Monday" value="Monday"/>
                        <Picker.Item label="Tuesday" value="Tuesday"/>
                        <Picker.Item label="Wensday" value="Wensday"/>
                        <Picker.Item label="Thursday" value="Thursday"/>
                        <Picker.Item label="Friday" value="Friday"/>
                        <Picker.Item label="Saturday" value="Saturday"/>
                        <Picker.Item label="Sunday" value="Sunday"/>
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles ={
  pickerTextStyle:{
      fontSize:18,
      paddingLeft:20
  }
};
const mapStateToProps = (state) => {
    const {name,phone,shift}= state.emplyeeForm;
};
export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);