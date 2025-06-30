import React from 'react';
import { GraduationCap, BookOpenText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const educationList = [
    {
      icon: <GraduationCap className="w-6 h-6 text-muted-foreground" />,
      title: 'Govt. Tangail Polytechnic Institute',
      degree: 'Diploma in Electrical',
      result: 'CGPA: 3.70',
    },
    {
      icon: <BookOpenText className="w-6 h-6 text-muted-foreground" />,
      title: 'Govt. Hazi Korop Ali Memorial College',
      degree: 'Higher Secondary (Arts)',
      result: 'GPA: 4.40',
    },
  ];

  return (
    <div id="education" className="max-w-6xl mx-auto py-12 px-4 sm:px-6 md:px-8 font-inter">
      <h1 className="text-4xl font-bold mb-10 text-center">Education</h1>

      <div className="space-y-6">
        {educationList.map((item, index) => (
          <Card key={index} className="p-4">
            <CardContent className="flex items-start gap-4 p-0">
              <div className="mt-1">{item.icon}</div>
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-muted-foreground">{item.degree}</p>
                <p className="text-sm text-muted-foreground">{item.result}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Education;
