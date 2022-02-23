#include <iostream>
#include <string>
using namespace std;

int main(){
	int first_page, last_page;
	cout<<"First Page: ";
	cin>>first_page;
	cout<<"Last Page: ";
	cin>>last_page;
    cout<<"Front pages:\n";
	for(int i=0; i<last_page; i+=6)
	{
		cout<<first_page+i<<"-"<<first_page+(i+3)<<",";
		i+=2;
	}
	cout<<"\nBack pages:\n";
		for(int i=4; i<last_page; i+=6)
	{
		cout<<first_page+i<<"-"<<first_page+(i+3)<<",";
		i+=2;
	}
	cout<<"\n";
	if(last_page%8==0)
		cout<<"All of Pages have Back and Front\n";
	else
		cout<<"End pages may be not have back of front completely\n";
}