(function(){

  let d = document

  this.Modal = function() {

    this.modal = null
    this.pop = false
    this.closeBtn = null
    this.overlay = null

    let defaults = {
      el: ".btn-open",
      className: "elme-pop",
      minWidth: 320,
      maxWidth: 600,
      closeBtn: "x"
    }

    if (arguments[0] && typeof arguments[0] === 'object') {
      this.options = extendOptions(defaults, arguments[0])
    }      
    
    // methods
    function extendOptions (source, properties) {
      for ( var property in properties ) {
        if (properties.hasOwnProperty(property))
          source[property] = properties[property]
      }
      return source
    }

    function createModalElem () {
      let frag = document.createDocumentFragment();

      this.modal.classList.add('open')
      this.modal.style.minWidth = this.options.minWidth + 'px'
      this.modal.style.maxWidth = this.options.maxWidth + 'px'
      this.overlay = d.createElement('div')
      this.overlay.classList.add('overlay')
      frag.appendChild(this.overlay)
      
      // if (typeof this.options.closeBtn === 'string' && this.options.closeBtn[0] != '<') { 
      if (typeof this.options.closeBtn === 'string') { 
      // if (this.options.closeBtn.nodeType === 1) {
        this.closeBtn = d.createElement('button')
        this.closeBtn.classList.add('modal-close')
        this.closeBtn.innerHTML = this.options.closeBtn
        this.modal.appendChild(this.closeBtn)
        this.modal.classList.add(this.options.className)
      } 

      d.body.appendChild(frag);
    }

    function closeEvents (btn) {
      // let _this = this;

      // document.addEventListener('keydown', function (evt){
      //   if(evt.keyCode === 27) {
      //     console.log(btn)
      //     _.close.call(_this, btn)
      //   }
      // })

      if (this.closeBtn) 
        this.closeBtn.addEventListener('click', this.close.bind(this, btn));

      if (this.overlay)
        this.overlay.addEventListener('click', this.close.bind(this, btn));
    }

    Modal.prototype.open = function(el) {
      if (!this.pop && !el.classList.contains('triggered')) {
        this.modal = d.querySelector(el.getAttribute('data-modal'))
        this.pop = true
        el.classList.add('triggered')
        createModalElem.call(this)
      }

      closeEvents.call(this, el)
    }

    Modal.prototype.close = function (btn) {
      let _ = this;
      if (_.pop || _.modal) {
        _.pop = false
        _.modal.classList.remove('open')
        _.modal.classList.remove(_.options.className)
        if (_.closeBtn) {
          _.modal.removeChild(_.closeBtn)
          btn.classList.remove('triggered')
        }
        if (_.overlay) {
          _.overlay.parentNode.removeChild(_.overlay)
          btn.classList.remove('triggered')
        }
      }
    }

    if (this.options.el[0] === '.' && this.options.el[0] !== null || this.options.el[0] === '#') {
      btnOpener = this.options.el;
      d.querySelectorAll(btnOpener).forEach(el => {
        el.addEventListener('click', this.open.bind(this, el))
      });
    } else {
      throw 'Please put a class or id element'
    }
  }

})();

