#include <stdio.h>
#include <string.h>










int segv() {
  int* a = NULL;
  int c = 4 + *a;
  return c;
}







int fpe() {
  int b = 150/0;
  return b;
}






















void printHelp() {
    printf("./trashc [fpe|segv]\n");
}

int main(int argc, char* argv[]) {
  if (argc <= 1) {
    printHelp();
    return 1;
  }

  if (strncmp(argv[1],"fpe", 3) == 0) {
    return fpe();
  }
  else if(strncmp(argv[1], "segv", 4) == 0) {
    return segv();
  }
  else {
    printHelp();
    return 1;
  }
}
