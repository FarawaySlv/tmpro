const main_menu = [
	{
		id:'workflow', 
		name: 'Workflow',
		isOpen: false, 
		children: [{
			id:'test1', 
			name: 'Test 1'
		},{
			id:'test2',
			name: 'Test 2'
		}]
	},{
		id:'catalogs', 
		name: 'Catalogs',
		isOpen: true, 
		children: [{
			id:'hall', 
			name: 'Halls'
		},{
			id:'users',
			name: 'Users'
		}]
	},{
		id:'options',
		name: 'Options',
		isOpen: false,
		children: null
	}]

export default main_menu;