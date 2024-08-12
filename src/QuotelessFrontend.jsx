import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image} from '@react-pdf/renderer';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card';
import { FileText, Download } from 'lucide-react';

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 40,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  companyInfo: {
    fontSize: 10,
    color: '#333',
  },
  customerInfo: {
    fontSize: 10,
    color: '#333',
    textAlign: 'right',
  },
  logo: {
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    right: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  invoiceNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e91e63', // Pink color for invoice number
  },
  table: {
    display: 'table',
    width: 'auto',
    marginTop: 20,
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  tableCell: {
    width: '20%',
    borderStyle: 'solid',
    borderColor: '#bfbfbf',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: 5,
    fontSize: 10,
  },
  tableCell40: {
    width: '40%',
  },
  totalSection: {
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 3,
  },
  totalLabel: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 10,
  },
  balanceDue: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#e91e63', // Pink color for balance due
    marginTop: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    color: '#777',
    fontSize: 10,
    borderTop: '1px solid #ddd',
    paddingTop: 10,
  },
});



const QuotelessFrontend = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  });
  const [quote, setQuote] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const generateQuote = (description) => {
    const rate = 75;
    const hours = Math.ceil(Math.random() * 5) + 1; // Random hours between 1-6
    return {
      description,
      hours,
      rate,
      total: hours * rate
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedQuote = generateQuote(formData.description);
    setQuote(generatedQuote);
  };

// PDF Document component
const QuotePDF = ({ quote }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
      <Image style={styles.logo} src="logo.png" onError={(error) => console.error('Image loading error:', error)}/> 
        <View>
          <Text style={styles.title}>Tower Bridge Technical LLC</Text>
          <Text style={styles.text}>Invoice #: INV-{Date.now()}</Text>
          <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Client Information</Text>
        <Text style={styles.text}>Name: {formData.name}</Text>
        <Text style={styles.text}>Email: {formData.email}</Text>
        <Text style={styles.text}>Phone: {formData.phone}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Service Details</Text>
        <Text style={styles.text}>Issue Description: {quote.description}</Text>
        <Text style={styles.text}>Estimated Hours: {quote.hours}</Text>
        <Text style={styles.text}>Hourly Rate: ${quote.rate}</Text>
      </View>

      <View style={styles.totalSection}>
        <Text style={styles.totalText}>Total Cost: ${quote.total}</Text>
      </View>

      <View style={styles.footer}>
        <Text>Thank you for your business!</Text>
        <Text>Tower Bridge Technical LLC - Your Onsite IT Support Partner</Text>
        <Text><i>Bridging Excellence, Elevating Technology</i></Text>
      </View>
    </Page>
  </Document>
);
  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6">Quoteless.ai - IT Support Quote</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="John Doe"
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="john@example.com"
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            placeholder="(123) 456-7890"
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Describe your IT issue in detail</label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            placeholder="Please provide as much detail as possible about your IT issue..."
            rows={4}
            className="mt-1"
          />
        </div>
        <Button type="submit" className="w-full">Generate Quote</Button>
      </form>
      
      {quote && (
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Generated Quote</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Issue Description: {quote.description}</p>
            <p>Estimated Hours: {quote.hours}</p>
            <p>Hourly Rate: ${quote.rate}</p>
            <p>Total Cost: ${quote.total}</p>
            <PDFDownloadLink
              document={<QuotePDF quote={quote} />}
              fileName="it_support_quote.pdf"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-4"
            >
              {({ blob, url, loading, error }) =>
                loading ? 'Generating PDF...' : 'Download PDF Quote'
              }
            </PDFDownloadLink>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QuotelessFrontend;