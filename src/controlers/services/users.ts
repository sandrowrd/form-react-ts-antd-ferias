import React from "react";

export class dataUserRequired {
  private nameRequired = "";
  private numcadRequired = 0;
  private tipcolRequired = 0;
  private numempRequired = 0;
  private titcarRequired = "";
  private nomccuRequired = "";
  private razfilRequired = "";
  private supImeRequired = "";

  constructor(
    name: string,
    numcad: number,
    titcar: string,
    nomccu: string,
    razfil: string,
    supime: string,
    tipcol: number,
    numemp: number
  ) {
    name = this.nameRequired;
    numcad = this.numcadRequired;
    titcar = this.titcarRequired;
    nomccu = this.nomccuRequired;
    razfil = this.razfilRequired;
    supime = this.supImeRequired;
    tipcol = this.tipcolRequired;
    numemp = this.numempRequired;
  }

  public setName(name: string) {
    this.nameRequired = name;
  }

  public setRegistration(regist: number) {
    this.numcadRequired = regist;
  }

  public setOffice(office: string) {
    this.titcarRequired = office;
  }

  public setNomCcu(nomCcu: string) {
    this.nomccuRequired = nomCcu;
  }

  public setRazFil(razFil: string) {
    this.razfilRequired = razFil;
  }

  public setSupIme(supIme: string) {
    this.supImeRequired = supIme;
  }

  public setTipCol(tipcol: number) {
    this.tipcolRequired = tipcol;
  }

  public setNumEmp(numemp: number) {
    this.numempRequired = numemp;
  }

  public getName() {
    return this.nameRequired;
  }

  public getRegistration() {
    return this.numcadRequired;
  }

  public getOffice() {
    return this.titcarRequired;
  }

  public getNomCcu() {
    return this.nomccuRequired;
  }

  public getRazFil() {
    return this.razfilRequired;
  }

  public getSupIme() {
    return this.supImeRequired;
  }

  public getNumEmp() {
    return this.numempRequired;
  }

  public getTipCol() {
    return this.tipcolRequired;
  }
}
