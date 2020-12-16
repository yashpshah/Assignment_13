import React, { Component } from 'react'

class ProductRow extends Component {
	constructor(props) {
		super(props)
		this.destroy = this.destroy.bind(this)
		this.edit = this.edit.bind(this)
	}

	edit() {
		this.props.onEdit(this.props.product.id);
	}

	destroy() {
		this.props.onDestroy(this.props.product.id);
	}

	render() {
		const { product } = this.props.product;
		return (
			<tr>
				<td>{product.name}</td>
				<td>{product.category}</td>
				<td>{product.price}</td>
				<td>{(product.instock) ? "Yes" : "No"}</td>
				<td className="text-right">
					<button onClick={this.edit} className="btn btn-warning mr-2">Edit</button>
					<button onClick={this.destroy} className="btn btn-danger">Delete</button>
				</td>
			</tr>
		)
	}
}

export default ProductRow