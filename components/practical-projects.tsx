import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export function PracticalProjects() {
  const { language } = useLanguage();

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">
          {language === 'en' ? 'Hands-on Labs & Practical Experience' : 'Laboratorios y Experiencia Práctica'}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <h3 className="font-semibold text-foreground mb-2">
            {language === 'en' 
              ? 'Infrastructure & SOC Home Lab — Administration & Incident Troubleshooting' 
              : 'Home Lab de Infraestructura & SOC — Administración y Resolución de Incidentes'}
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            {language === 'en' 
              ? 'Deployment and administration of a virtualized lab environment across Linux and Windows systems focused on infrastructure support and security operations. Configuration of services, user accounts, and policies, combined with hands-on troubleshooting of technical incidents (account lockouts, connectivity issues, anomalous events). Analysis of system and authentication logs (Event Viewer, Syslog) with incident triage following SLA standards.'
              : 'Despliegue y administración de un entorno de laboratorio virtualizado en Linux y Windows enfocado en soporte de infraestructura y operaciones de seguridad. Configuración de servicios, usuarios y políticas, junto con la resolución práctica de incidencias técnicas (bloqueos de cuentas, fallos de conectividad, eventos anómalos). Análisis de logs de sistema y autenticación (Event Viewer, Syslog) con triaje de incidentes bajo estándares de SLA.'}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            {language === 'en' ? 'Network Diagnostics, Traffic Analysis & Troubleshooting' : 'Diagnóstico de Redes, Análisis de Tráfico y Troubleshooting'}
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            {language === 'en' ? (
              <>
                Network diagnostics, traffic capture, and analysis using tools such as
                <code className="text-cyan-400 mx-1">Wireshark</code>
                for connectivity troubleshooting, protocol inspection (TCP/IP, DNS, DHCP, ARP),
                and identification of performance bottlenecks or anomalous traffic.
                Practiced isolating network issues and ensuring operational availability and baseline security.
              </>
            ) : (
              <>
                Diagnóstico, captura y análisis de tráfico de red utilizando herramientas como
                <code className="text-cyan-400 mx-1">Wireshark</code>
                para resolución de incidencias de conectividad, análisis de protocolos (TCP/IP, DNS, DHCP, ARP)
                y detección de cuellos de botella o tráfico anómalo.
                Práctica en aislamiento de fallas de red y evaluación de indicadores de disponibilidad y seguridad operativa.
              </>
            )}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-foreground mb-2">
            {language === 'en' ? 'Technical Incident Management & Alert Triage' : 'Gestión de Incidentes Técnicos y Triaje de Alertas'}
          </h3>
          <p className="text-sm text-foreground leading-relaxed">
            {language === 'en'
              ? 'Simulation of IT Helpdesk and SOC support workflows handling technical alerts and system events. Practiced incident categorization, impact-based prioritization, case documentation, and escalation procedures to ensure SLA compliance.'
              : 'Simulación de flujos de trabajo de soporte IT / Mesa de Ayuda y SOC mediante la recepción, análisis y resolución de alertas y eventos técnicos. Práctica en categorización de incidencias, priorización según impacto, documentación detallada de casos y protocolos de escalamiento para asegurar el cumplimiento de SLAs.'}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
