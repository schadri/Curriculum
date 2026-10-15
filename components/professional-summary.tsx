import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/components/language-provider";

export function ProfessionalSummary() {
  const { language } = useLanguage();

  const title = language === 'en' ? "Professional Summary" : "Resumen Profesional";
  const content = language === 'en' 
    ? "Versatile and proactive IT professional based in Buenos Aires (CABA). Combining a solid technical background in infrastructure support, networking (TCP/IP, Wireshark), operating systems (Windows/Linux), and Active Directory, with hands-on experience in incident resolution under service level agreements (SLAs). Continuously training in cybersecurity with a strong background in operational and commercial environments."
    : "Profesional IT polivalente y resolutivo basado en Buenos Aires (CABA). Combino una sólida base técnica en soporte de infraestructura, redes (TCP/IP, Wireshark), sistemas operativos (Windows/Linux) y Active Directory, con experiencia práctica en resolución de incidencias bajo normas y acuerdos de nivel de servicio (SLA). Con formación continua en ciberseguridad y sólida trayectoria en entornos operativos/comerciales.";

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-cyan-400">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground leading-relaxed text-center">
          {content}
        </p>
      </CardContent>
    </Card>
  );
}
