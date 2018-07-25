# Modal v2 

With Modal v2 I have implemented an OOP approach which saves me a lot of bugs and hussles.

If you saw something that needs to improve just let me know.
Thanks in advance.

[Here's the demo](https://iamelme.github.io/Vanilla-JS-Modal-v2/)


```javascript
const myModal = new Modal({
  el: '#btn1', // el stands for element, this element will be the target modal of our class
  className: 'gwapo', // default css class is elme-pop
  minWidth: 580, // you can specify the minimum width of the modal or default 360px
  maxWidth: 900 // the maximum width of the modal or default 600px
});
```