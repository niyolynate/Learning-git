package main

func main{}

//C++
#include <iostream>
#include <cmath>
using namespace std;
int main()
{
  int number, result;
  cout <<"Enter any number: ";
  cin >> number;
  result = pow(number, 0.5);
  cout<<"\nSqure of "<<number<<" is: " << result << endl;
}

/*
OUTPUT
Enter any number: 9
Squre of 9 is: 3
*/

//Find the square root of a given number using std::sqrt function.

#include <iostream>
#include <cmath>
using namespace std;
int main()
{
  int number,result;
  cout << "Enter any numberber: ";
  cin >> number;
  result = sqrt(number);
  cout<<"\nSqure of " << number << " is: " <<result;
}

/*
OUTPUT
Enter any numberber: 36
Squre of 36 is: 6

*/


//Hello World Program
//include headers; these are modules that include functions that you may use in your
//program; we will almost always need to include the header that
// defines cin and cout; the header is called iostream
#include <iostream>

using namespace std;

int main()
{
  // print output to user
  cout << "Hello World!" << endl;
  return 0;
}
