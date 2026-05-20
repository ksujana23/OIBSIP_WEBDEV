#include<stdio.h>
int main()
{
    int n,s=0,r;
    printf("Enter n: ");
    scanf("%d",&n);
    int n1=n;
    while(n>0)
    {
        r=n%10;
        s=s+(r*r*r);
        n=n/10;
    }
    if(n1==s)
    printf("%d is an Armstrong number",n1);
    else
    printf("%d is not an Armstrong number",n1);
}