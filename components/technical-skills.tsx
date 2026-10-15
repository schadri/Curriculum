import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/components/language-provider";

export function TechnicalSkills() {
  const { language } = useLanguage();

  const helpdeskAndInfrastructure = language === 'en'
    ? [
        "Active Directory (GPOs, Permissions)",
        "Troubleshooting",
        "Windows Server / 10 / 11",
        "Linux (Ubuntu, RHEL)",
        "Ticket Management (SLA)",
        "VirtualBox / VMware",
      ]
    : [
        "Active Directory (GPOs, Permisos)",
        "Troubleshooting",
        "Windows Server / 10 / 11",
        "Linux (Ubuntu, RHEL)",
        "Gestión de Tickets (SLA)",
        "VirtualBox / VMware",
      ];

  const networkingAndTools = language === 'en'
    ? [
        "TCP/IP",
        "DNS / DHCP",
        "Wireshark",
        "Nmap",
        "Log Analysis (Event Viewer, Syslog)",
      ]
    : [
        "TCP/IP",
        "DNS / DHCP",
        "Wireshark",
        "Nmap",
        "Análisis de Logs (Event Viewer, Syslog)",
      ];

  const cybersecurityAndDev = [
    "SOC Fundamentals",
    "Incident Detection",
    "Git / GitHub",
    "Bash / Python Scripting",
    "JavaScript / React",
  ];

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">
          {language === 'en' ? 'Technical Skills' : 'Habilidades Técnicas'}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            {language === 'en' ? 'Helpdesk & Infrastructure' : 'Helpdesk e Infraestructura'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {helpdeskAndInfrastructure.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-muted text-foreground"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            {language === 'en' ? 'Networking & Tools' : 'Redes y Herramientas'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {networkingAndTools.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-muted text-foreground"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-3">
            {language === 'en' ? 'Cybersecurity & Dev' : 'Ciberseguridad y Desarrollo'}
          </h3>
          <div className="flex flex-wrap gap-2">
            {cybersecurityAndDev.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-muted text-foreground"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
