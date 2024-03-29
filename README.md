# vuejs

## vue-1

`v-on` is Used to bind events
`v-model` two way data binding
`v-model.lazy` update after finish

## vue-2

`v-once` is Used to display the data once
`v-html` is Used display comeplet html syntax

## vue-3

`v-on:mouseover.stop` is Used to stop propagation
`v-on.keyup.enter.space.tab.esc.up.left.right` is Used to bind key events

## vue-4

`computed` is executed for dependent properties
`watch` is executed for change in data

## vue-5

use `@` instead of `v-on:`
use `:` instead of `v-bind:`

## vue-6

`:style` different dynamic style methods

## vue-7

`v-if="condition"` and `v-else` are used to attach or detach element

## vue-8

`v-show="condition"` is used to show or hide element

## vue-9

`v-for="item in items` is for loop works with `(array,index)` and `(object,key,index)` and number  `(n in 10)`

## Mini-Project-Monster-Slayer

A simple one page aplication - `Monster Slayer`

## vue-10

Template
```javascript
Vue.component('hello',{
    template: '<h1>Hello Temp Component!</h1>'
});

// or

var vm3 = new Vue({
    template: '<h1>Hello!</h1>'
});
document.getElementById("app3").appendChild(vm3.$el);

// display 

vm.$mount('#app2');
//or
vm.$mount();

```

## vue-11

LifeCycle
```javascript
beforeCreate()
    |
created()
    |
beforeMount()
    |
beforeUpdate()
    |
updated()
    |
beforeDestroy()
    |
destroyed()
```

## vue-cli

`npm install -g vue-cli` learn about vue cli with `webpack-simple`

`$ vue init webpack-simple dir_name`

Refactoring Components

## vue-12

`Vue.component({  });` Vue component

## vue-cli-2

### Data Transfer Parent and Child


In Component 

```html
<C :prop_name></C>
```

```javascript
//in P
<script>
    export default {
        props: {
            prop_name: {
                type: String,
                required: true,
                default: 'Name'
            }
        },
        // access using this.prop_name
    }
</script>
```

### Data Transfer Child to Parent

In Component 

```html
<!-- <C @nameOfTheEventToEmit="doSomething"></C> -->
<C @nameOfTheEventToEmit="currentData = $event"></C>
<!-- $event is passed data -->
```

In Parent 

```html 
//in P
<template>
    <button @click="someMethod">Event</button>
</template>
```
```javascript
<script>
    export default {
        props: ['props_name'],
        methods: {
            someMethod() {
                this.props_name = 'something';
                this.$emit('nameOfTheEventToEmit',this.props_name);
            }
        }
        // this.prop_name is passed as argument and accessed as $event in Child
    }
</script>
```

### Data Transfer Child to Child

```javascript
//in main.js
export const eventBus = new Vue({
    methods: {
        eventBusmethod(passed_data) {
            this.$emit('nameOfTheEventToEmit',passed_data);
        }
    }
});
```

First Child

```html
<!-- in First Child(From Where Change Will Be Made) -->
<template>
    <button @click="someMethod">Event</button>
</template>
```

```javascript
<script>
    import { eventBus } from '../main';
    
    export default {
        props: ['props_name'],
        methods: {
            someMethod() {
                this.props_name = 'Something';
                eventBus.eventBusMethod(this.props_name);
                //this.props_name is passed as argument to eventBusMethod 
            }
        }
    }
</script>
```

Second Child


```javascript
//in Second Child(Where Change Will Effect)
<script>
    import { eventBus } from '../main';
   
    export default {
        props: ['props_name'],
        created() {
            eventBus.$on('nameOfTheEventToEmit',(data)=>{
                //callback function
                this.props_name = data;
            });
        }
        }
    }
</script>
```

## vue-cli-3

Display HTMl blocks from Parent in Child : uses `slot="nameoftheslot"` and `<slot name="nameoftheslot></slot>`

```html
<!-- In Parent -->
<child>
    <htmltag slot="slot_name">The Contentent</htmltag>
    <htmltag2 slot="slot_name2">Second Content</htmltag2>
</child>
```

```html
<!-- In Child -->
<slot name="slot_name"></slot>
<slot name="default_slot_name">Default Text If Slot Name Not Passed</slot>
<slot name="slot_name2"></slot>
```

#### Note: Styling Effects in Child
#### Data {{ }} effects in Parent

### Switching Between Compnent

```
     Parent
 _______|______
  |          |
Child1    Child2
```

```html
<!-- in parent   -->
<component :is="selectedComponent">
    <p>Default Content</p>
</component>
```

```javascript
<script>
    import CHLID1 from 'CHILD1.vue';
    import CHLID2 from 'CHILD2.vue';

    export default {
        data: function() {
            return {
                selectedComponent: CHILD2
            };
        },
        components : {
            appChlid1 : CHILD1,
            appChlid2 : CHILD2
        }
    }
</script>
```

```html
<!-- In Child1 -->
<template>
    <h1>Child 1</h1>
</template>
```

```html
<!-- In Child2 -->
<template>
    <h1>Child 2</h1>
</template>
```

### To Keep Alive A Dynamic Component

```html
<!-- In Parent -->
<keep-alive>
    <component :is="selectedComponent">
        <p>Default Content</p>
    </component>
</keep-alive>
```

```javascript
// in Child
<script>
    export default {
        destroyed() {
          console.log('Destroyed');
        },
        deactivated() {
          console.log('Deactivated');
        },
        activated() {
          console.log('Activated');
        }
    }
</script>

```

## Mini-Project-Quote-Manager

One page application - Quote Manger

## vue-cli-4

`v-model` --> 

```javascript
    :value="userData.email"
    @input="userData.email = $event.target.value"
```

### Select-Option (Drop-Down)

```html
<div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
        <label for="priority">Priority</label>
        <select
            id="priority"
            class="form-control"
            v-model="selectedPriority">

            <option 
                v-for="priority in priorities" 
                :key="priority" 
                :selected="priority == 'Medium'">
                {{ priority }}
            </option>

        </select>
    </div>
</div>
```

```javascript
export default{
    data: () => {
        return {
            selectedPriority: 'High',
            priorities: ['High','Medium','Low']
        };
    }
}

// :selected is overwrited by v-model in <select> 
```

Same `Radio Button` or `Checkbox` --> Same `v-model` Name

## vue-cli-5

### Directives
#### Built-In

    `v-text`

    `v-html`

#### Custom

Hooks

```javascript
    bind(el,binding,vnode)
    inserted(el,binding,vnode)
    update(el,binding,vnode,oldVnode)
    componentUpdated(el,binding,vnode,oldVnode)
    unbind(el,binding,vnode)    
```


Creating custom directives Globaly

```javascript
//in main.js file
Vue.directive('highlight',{
  bind(el,binding,vnode) {
    el.style.backgroundColor = 'green';
    el.style.backgroundColor = binding.value;
  }
});
```

Creating custom directives Locally

```javascript
<script>
    export default {
      directives: {
        'local-directive': {
          bind(el,binding,vnode) {
              
          }
        }
      }
    }
</script>
```

Modifiers ( in the following eg: `delayed` and `blink` )
```html
<p v-local-highlight:background.delayed.blink="{ mainColor: 'red', secondColor: 'blue', delay: 500 }">Color This</p>
```

```javascript
//modifiers are saved in binding.modifiers array with key
//following code check for modifiers blink and delay and changes the style in above html code
<script>
export default {
	directives: {
'local-highlight': {
	bind(el,binding,vnode) {
	var delay = 0;
	if(binding.modifiers['delayed']) {
		delay = 3000;
	}
	if(binding.modifiers['blink']) {
		let mainColor = binding.value.mainColor;
		let secondColor = binding.value.secondColor;
		let currentColor = mainColor;

		setTimeout(function() {
		setInterval(()=>{
			currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
			if(binding.arg == 'background') {
				el.style.backgroundColor = currentColor;
			} else {
				el.style.color = currentColor;
			}
			},binding.value.delay);
			
		}, delay);

	} else {

	setTimeout(function() {
	if(binding.arg == 'background') {
		el.style.backgroundColor = binding.value.mainColor;
	} else {
		el.style.color = binding.value.mainColor;
	}
	}, delay);
		
	}
	}
	}
}
}
</script>
```
