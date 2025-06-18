class AccessControl {
  private employeeAccess = new Set<string>();
  private tempNonActive = new Set<string>();

  grant(name: string) {
    this.employeeAccess.add(name);
  }
  revoke(name: string) {
    if (this.employeeAccess.has(name)) {
      this.tempNonActive.add(name);
      this.employeeAccess.delete(name);
    }
  }
  restore(name: string) {
    if (this.tempNonActive.has(name)) {
      this.employeeAccess.add(name);
    }
  }
  canAccess(name: string) {
    return this.employeeAccess.has(name);
  }
}

const access = new AccessControl();
access.grant("EMP001");
access.grant("EMP002");
console.log(access.canAccess("EMP001"));

access.revoke("EMP001");
console.log(access.canAccess("EMP001"));

access.restore("EMP001");
console.log(access.canAccess("EMP001"));
