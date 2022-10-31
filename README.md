**2 possible cases to do in ngOnInit lifecycle hook**
      
1.
interface OnInit {
  ngOnInit(): void
}

2.
@Component({selector: 'my-cmp', template: `...`})
class MyComponent implements OnInit {
  ngOnInit() {
    // ...
  }
}

**When does Angular call ngOnInit?**
A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive. 

**When does Angular call ngAfterViewInit?**
ngAfterViewInit() is called after all child components are initialized and checked.

**When does Angular call ngOnChange?**
ngOnChanges gets called before ngOnInit and whenever a component's bound input is changed FROM THE PARENT COMPONENT.

**Arrange the possible lifecycle hooks called in that scenario**
ngOnChanges()

ngOnInit()

ngDoCheck()

ngAfterContentInit()

ngAfterContentChecked()

ngAfterViewInit()
