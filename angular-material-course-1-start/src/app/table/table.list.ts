import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';



@Injectable({
  providedIn: 'root'
})

@Component({
    selector: 'app-root',
    templateUrl: './table.list.html',
    styleUrls: ['./table.list.scss']
  })

export class tablelist {
    [x: string]: any;

  private uriPrefix = 'assets/data/config/';
  private uriSuffix = '.json';
    dialog: any;

  constructor(private httpClient: HttpClient) {}


  public get(filename: string): Promise<any> {
    return this.httpClient.get<any>(this.uriPrefix + filename + this.uriSuffix).toPromise();
  }

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = ELEMENT_DATA;

  

  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open( {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
        if(result.event == 'Add'){
          this.addRowData(result.data);
        }else if(result.event == 'Update'){
          this.updateRowData(result.data);
        }else if(result.event == 'Delete'){
          this.deleteRowData(result.data);
        }
      });
    }

    addRowData(row_obj){
        var d = new Date();
        this.dataSource.push({
          id:d.getTime(),
          name:row_obj.name
        });
        this.table.renderRows();
        
      }

      updateRowData(row_obj){
        this.dataSource = this.dataSource.filter((value,key)=>{
          if(value.id == row_obj.id){
            value.name = row_obj.name;
          }
          return true;
        });
      }

      deleteRowData(row_obj){
        this.dataSource = this.dataSource.filter((value,key)=>{
          return value.id != row_obj.id;
        });
      }
    }

export interface UsersData {
    name: string;
    id: number;
  }

  const ELEMENT_DATA: UsersData[] = [
    {id: 1560608769632, name: 'Artificial Intelligence'},
    {id: 1560608796014, name: 'Machine Learning'},
    {id: 1560608787815, name: 'Robotic Process Automation'},
    {id: 1560608805101, name: 'Blockchain'}
  ];



