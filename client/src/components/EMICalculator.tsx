import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Calculator, Download, Share2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(2500000); // 25 lakhs
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenure, setTenure] = useState(20);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyRate = interestRate / (12 * 100);
    const numberOfPayments = tenure * 12;
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
                (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return Math.round(emi);
  };

  const emi = calculateEMI();
  const totalAmount = emi * tenure * 12;
  const totalInterest = totalAmount - loanAmount;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatLakhs = (amount: number) => {
    const lakhs = amount / 100000;
    return `₹${lakhs.toFixed(1)} L`;
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <Badge className="mb-4 text-orange bg-orange/10 border-orange/20" data-testid="badge-calculator">
            <Calculator className="w-4 h-4 mr-2" />
            EMI Calculator
          </Badge>
          <h2 className="text-3xl font-bold text-primary mb-4" data-testid="heading-calculator">
            Calculate Your EMI
          </h2>
          <p className="text-muted-foreground">
            Plan your investment with our easy-to-use EMI calculator
          </p>
        </div>

        <Card className="hover-elevate">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-orange" />
              Loan EMI Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Input Controls */}
              <div className="space-y-6">
                {/* Loan Amount */}
                <div className="space-y-3">
                  <Label htmlFor="loan-amount" className="text-sm font-medium">
                    Loan Amount
                  </Label>
                  <div className="space-y-2">
                    <Input
                      id="loan-amount"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="text-lg font-medium"
                      data-testid="input-loan-amount"
                    />
                    <Slider
                      value={[loanAmount]}
                      onValueChange={(value) => setLoanAmount(value[0])}
                      max={5000000}
                      min={500000}
                      step={100000}
                      className="w-full"
                      data-testid="slider-loan-amount"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>₹5L</span>
                      <span className="font-medium">{formatLakhs(loanAmount)}</span>
                      <span>₹50L</span>
                    </div>
                  </div>
                </div>

                {/* Interest Rate */}
                <div className="space-y-3">
                  <Label htmlFor="interest-rate" className="text-sm font-medium">
                    Interest Rate (% p.a.)
                  </Label>
                  <div className="space-y-2">
                    <Input
                      id="interest-rate"
                      type="number"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      step="0.1"
                      className="text-lg font-medium"
                      data-testid="input-interest-rate"
                    />
                    <Slider
                      value={[interestRate]}
                      onValueChange={(value) => setInterestRate(value[0])}
                      max={15}
                      min={7}
                      step={0.1}
                      className="w-full"
                      data-testid="slider-interest-rate"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>7%</span>
                      <span className="font-medium">{interestRate}%</span>
                      <span>15%</span>
                    </div>
                  </div>
                </div>

                {/* Loan Tenure */}
                <div className="space-y-3">
                  <Label htmlFor="tenure" className="text-sm font-medium">
                    Loan Tenure (Years)
                  </Label>
                  <div className="space-y-2">
                    <Input
                      id="tenure"
                      type="number"
                      value={tenure}
                      onChange={(e) => setTenure(Number(e.target.value))}
                      className="text-lg font-medium"
                      data-testid="input-tenure"
                    />
                    <Slider
                      value={[tenure]}
                      onValueChange={(value) => setTenure(value[0])}
                      max={30}
                      min={5}
                      step={1}
                      className="w-full"
                      data-testid="slider-tenure"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>5 years</span>
                      <span className="font-medium">{tenure} years</span>
                      <span>30 years</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <div className="bg-orange/5 rounded-xl p-6 border border-orange/10">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">Monthly EMI</h3>
                    <div className="text-4xl font-bold text-orange mb-2" data-testid="result-emi">
                      {formatCurrency(emi)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      For {tenure} years at {interestRate}% p.a.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Principal Amount</span>
                      <span className="font-semibold" data-testid="result-principal">
                        {formatCurrency(loanAmount)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-border">
                      <span className="text-sm text-muted-foreground">Total Interest</span>
                      <span className="font-semibold text-orange" data-testid="result-interest">
                        {formatCurrency(totalInterest)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-sm text-muted-foreground">Total Amount</span>
                      <span className="font-bold text-primary" data-testid="result-total">
                        {formatCurrency(totalAmount)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-orange hover:bg-orange/90" 
                    size="lg"
                    data-testid="button-get-pre-approved"
                  >
                    Get Pre-Approved
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" data-testid="button-download-report">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" className="flex-1" data-testid="button-share-calculation">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium mb-3 text-sm">Quick Actions</h4>
                  <div className="space-y-2 text-sm">
                    <button className="text-primary hover:underline block" data-testid="link-schedule-site-visit">
                      Schedule Site Visit
                    </button>
                    <button className="text-primary hover:underline block" data-testid="link-download-brochure">
                      Download Project Brochure
                    </button>
                    <button className="text-primary hover:underline block" data-testid="link-contact-sales">
                      Contact Sales Team
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}