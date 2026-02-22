import ScrollReveal from "@/components/ScrollReveal";
import { ShieldCheck, LineChart, FileText } from "lucide-react";

const FiscalEfficiencySection = () => {
    return (
        <section id="fiscal-efficiency" className="section-cool py-32 lg:py-44 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <ScrollReveal>
                    <div className="mb-20 text-center">
                        <p className="text-xs font-bold text-primary mb-4 tracking-widest uppercase">Institutional Advantage</p>
                        <h2 className="mb-5 max-w-4xl mx-auto text-4xl font-extrabold tracking-tight">
                            Fiscal Efficiency & Compliance
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Retain your institutional assets while accessing liquidity. Navigate the European regulatory landscape with confidence.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8">
                    <ScrollReveal delay={0.1}>
                        <div className="card-brutal-sm card-hover rounded-3xl bg-card p-8 h-full">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                <LineChart className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Zero Tax Friction. Avoid 25% Capital Gains.</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Selling digital assets for operational liquidity typically triggers a corporate tax or capital gains tax of up to 25%.
                                By utilizing our Programmatic Pignoration, you pledge assets via Smart Contract instead of selling them, unlocking liquidity without the tax penalty.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="card-brutal-sm card-hover rounded-3xl bg-card p-8 h-full">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">MiCA 2026 & AI Act Compliant</h3>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Designed for the European institutional market. Our credit underwriting and asset pledging mechanisms are built to be fully <strong>MiCA Ready</strong>.
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                                    <FileText className="w-4 h-4 text-primary" /> AI Act Audited Models
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default FiscalEfficiencySection;
