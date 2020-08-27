import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { ExportAsService, ExportAsConfig, SupportedExtensions } from 'ngx-export-as';

@Component({
  selector: 'app-assuntos-listagem',
  templateUrl: './assuntos-listagem.component.html',
  styleUrls: ['./assuntos-listagem.component.scss']
})
export class AssuntosListagemComponent implements OnInit {
  renderedData: any;

  config: ExportAsConfig = {
    type: 'pdf',
    elementIdOrContent: 'mytable',
    options: {
      jsPDF: {
        orientation: 'landscape'
      },
      pdfCallbackFn: this.pdfCallbackFn // to add header and footer
    }
  };


  displayedColumns = ['texto', 'editar', 'excluir'];
  dataSource = new MatTableDataSource<AssuntosLista>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private exportAsService: ExportAsService
  ) {}

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  exportAs(type: SupportedExtensions, opt?: string) {
    this.config.type = type;
    if (opt) {
      this.config.options.jsPDF.orientation = opt;
    }
    this.exportAsService.save(this.config, 'myFile').subscribe(() => {
      // save started
    });
    // this.exportAsService.get(this.config).subscribe(content => {
    //   const link = document.createElement('a');
    //   const fileName = 'export.pdf';

    //   link.href = content;
    //   link.download = fileName;
    //   link.click();
    //   console.log(content);
    // });
  }

  pdfCallbackFn (pdf: any) {
    // example to add page number as footer to every page of pdf
    const noOfPages = pdf.internal.getNumberOfPages();
    for (let i = 1; i <= noOfPages; i++) {
      pdf.setPage(i);
      pdf.text('Page ' + i + ' of ' + noOfPages, pdf.internal.pageSize.getWidth() - 100, pdf.internal.pageSize.getHeight() - 30);
    }
  }
}

export interface AssuntosLista {
  texto: string;
  editar: string;
  excluir: string;
}

const ELEMENT_DATA: AssuntosLista[] = [
  {texto: 'Boas Vindas', editar: 'sim', excluir: 'sim'},
  {texto: 'Cartões', editar: 'sim', excluir: 'sim'},
  {texto: 'Consórcio', editar: 'sim', excluir: 'sim'},
  {texto: 'Emprestimos', editar: 'sim', excluir: 'sim'},
  {texto: 'Descontos', editar: 'sim', excluir: 'sim'},
  {texto: 'Renegociação de dívidas', editar: 'sim', excluir: 'sim'},
];

