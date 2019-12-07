<!DOCTYPE html>
	<head>
		<meta charset="utf-8">
		<title>第六题答案</title>
	</head>
	<body>
		<div id='example'></div>
		<script src="./js/react.js"></script>
		<script src="./js/react-dom.js"></script>
		<script src="https://unpkg.com/prop-types@15.6/prop-types.js"></script>
		<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
		<script type="text/babel">
			class InputNumber extends React.Component{
			    static propTypes = {
					value: PropTypes.number.isRequired,
					defaultValue: PropTypes.number.isRequired,
					onChange: PropTypes.func.isRequired
				}
			    render() {
			        return (
			            <div>
			                <input type='number' defaultValue={this.props.defaultValue} value={this.props.value} onChange={this.props.onChange} />
			            </div>
			        );
			    }    
			}

			class App extends React.Component {
				state = {
					value:1
				}
				changeVal = (e) => {
					this.setState({
						value:e.target.value
					})
				}
				changeVal2 = (e) => {
					this.textInput.props.value = e.target.value
					console.log(this.textInput)
				}
				render() {
					return (
				        <div>
				        	<InputNumber value={this.state.value} onChange={this.changeVal}/>
				        	<InputNumber ref={ele => { this.textInput = ele}} defaultValue={1}
				        	 onChange={this.changeVal2}/>
				        	
				        </div>
				    )
				}
				
			}

			//2. 渲染组件标签
			ReactDOM.render(<App />, document.getElementById('example'))
			
		</script>
	</body>
</html>